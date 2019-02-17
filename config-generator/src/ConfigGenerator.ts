import * as fs from 'fs'
import * as path from 'path'
import * as _ from 'lodash'

export class ConfigGenerator {

    private placeholder = 0

    public generate(baseInterface: string): string {
        const content = fs.readFileSync(baseInterface).toString()
        return this.getTopLevelInterfaceDescription(content, baseInterface);
    }


    private getTopLevelInterfaceDescription(content: string, baseInterface: string) {
        const interfaceNameRegex = /\w*(?=\s\{\s*\n)/;
        const interfaceNames = interfaceNameRegex.exec(content);
        let interfaceDescription: string = '';
        if (interfaceNames) {
            interfaceDescription = interfaceNames[0];
            interfaceDescription += ' : {';
            interfaceDescription += this.getMembers(content, baseInterface, 1);
            interfaceDescription += `\n}`;
        }
        return interfaceDescription;
    }

    private getMembers(content: string, baseInterface: string, level: number) {
        let membersAsString: string = ''
        const membersRegex = /\w*\??\s*\:\s*\w*/gm
        const customMemberRegex = /\w*(?=\??\s*\:.*)/
        let members
        let isFirst = true
        while (members = membersRegex.exec(content)) {
            if (members) {
                membersAsString = this.setTrailingComma(isFirst, membersAsString);
                let linestart = this.prepareLineStartCharacters(level);
                linestart = this.commentOptionalMembers(members, linestart);
                membersAsString += this.writeStringMember(members, linestart);
                membersAsString += this.writeNumberMember(members, linestart);
                membersAsString += this.writeBooleanMember(members, linestart);
                if (this.isCustomMember(members))
                    membersAsString += this.writeCustomMember(content, members, baseInterface, customMemberRegex, linestart, level);

                isFirst = false
            }


        }
        return membersAsString;
    }

    private isCustomMember(members: RegExpExecArray) {
        return !(members[0].endsWith('string') || members[0].endsWith('number') || members[0].endsWith('boolean'));
    }

    private writeCustomMember(content: string, members: RegExpExecArray, baseInterface: string, customMemberRegex: RegExp, linestart: string, level: number) {
        const importRegex = /\.*\/*\w*\.interface/gm
        let customMemberString: string = ''
        let currentImport = importRegex.exec(content);
        while (currentImport) {
            if (currentImport[0].includes(this.getTypeName(members))) {
                const absolutePath = path.resolve(path.dirname(baseInterface), currentImport[0]);
                const memberName = customMemberRegex.exec(members[0]);
                if (memberName) {
                    customMemberString += `${linestart}${memberName[0]}: ${this.generateContent(absolutePath + '.ts', level + 1)}`;
                    customMemberString += '\n}';
                }
            }
            currentImport = importRegex.exec(content)
        }
        return customMemberString;
    }

    private generateContent(interfaceName: string, level: number): string {
        const content = fs.readFileSync(interfaceName).toString()
        let interfaceDescription: string = ''
        interfaceDescription += '{'
        interfaceDescription += this.getMembers(content, interfaceName, level);
        return interfaceDescription
    }

    private getTypeName(members: RegExpExecArray): string {
        return members[0].substring(members[0].lastIndexOf(' ')).trim();
    }

    private writeNumberMember(members: RegExpExecArray, linestart: string) {
        const numberMemberRegex = /\w*(?=\??\:\snumber)/
        let numberMemberString: string = ''
        if (members[0].endsWith('number')) {
            numberMemberString += `${linestart}${numberMemberRegex.exec(members[0])}: $${this.placeholder}`;
            this.placeholder++
        }
        return numberMemberString;
    }

    private writeBooleanMember(members: RegExpExecArray, linestart: string) {
        const numberMemberRegex = /\w*(?=\??\:\sboolean)/
        let numberMemberString: string = ''
        if (members[0].endsWith('boolean')) {
            numberMemberString += `${linestart}${numberMemberRegex.exec(members[0])}: $${this.placeholder}`;
            this.placeholder++
        }
        return numberMemberString;
    }

    private writeStringMember(members: RegExpExecArray, linestart: string) {
        const stringMemberNameRegex = /\w*(?=\??\:\sstring)/
        let stringMemberString: string = ''
        if (members[0].endsWith('string')) {
            stringMemberString += `${linestart}${stringMemberNameRegex.exec(members[0])}: '$${this.placeholder}'`;
            this.placeholder++
        }
        return stringMemberString;
    }

    private commentOptionalMembers(members: RegExpExecArray, linestart: string) {
        if (this.isOptionalMember(members)) {
            linestart += '//';
        }
        return linestart;
    }

    private isOptionalMember(members: RegExpExecArray) {
        return members[0].indexOf('?') >= 0;
    }

    private setTrailingComma(isFirst: boolean, membersAsString: string) {
        if (!isFirst) {
            membersAsString += ',';
        }
        return membersAsString;
    }

    private prepareLineStartCharacters(level: number) {
        let linestart = '\n';
        for (let index = 0; index < level; index++) {
            linestart += '\t';
        }
        return linestart;
    }

}