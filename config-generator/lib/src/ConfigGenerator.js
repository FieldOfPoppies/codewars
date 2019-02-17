"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class ConfigGenerator {
    constructor() {
        this.placeholder = 0;
    }
    generate(baseInterface) {
        const content = fs.readFileSync(baseInterface).toString();
        return this.getTopLevelInterfaceDescription(content, baseInterface);
    }
    getTopLevelInterfaceDescription(content, baseInterface) {
        const interfaceNameRegex = /\w*(?=\s\{\s*\n)/;
        const interfaceNames = interfaceNameRegex.exec(content);
        let interfaceDescription = '';
        if (interfaceNames) {
            interfaceDescription = interfaceNames[0];
            interfaceDescription += ' : {';
            interfaceDescription += this.getMembers(content, baseInterface, 1);
            interfaceDescription += `\n}`;
        }
        return interfaceDescription;
    }
    getMembers(content, baseInterface, level) {
        let membersAsString = '';
        const membersRegex = /\w*\??\s*\:\s*\w*/gm;
        const customMemberRegex = /\w*(?=\??\s*\:.*)/;
        let members;
        let isFirst = true;
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
                isFirst = false;
            }
        }
        return membersAsString;
    }
    isCustomMember(members) {
        return !(members[0].endsWith('string') || members[0].endsWith('number') || members[0].endsWith('boolean'));
    }
    writeCustomMember(content, members, baseInterface, customMemberRegex, linestart, level) {
        const importRegex = /\.*\/*\w*\.interface/gm;
        let customMemberString = '';
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
            currentImport = importRegex.exec(content);
        }
        return customMemberString;
    }
    generateContent(interfaceName, level) {
        const content = fs.readFileSync(interfaceName).toString();
        let interfaceDescription = '';
        interfaceDescription += '{';
        interfaceDescription += this.getMembers(content, interfaceName, level);
        return interfaceDescription;
    }
    getTypeName(members) {
        return members[0].substring(members[0].lastIndexOf(' ')).trim();
    }
    writeNumberMember(members, linestart) {
        const numberMemberRegex = /\w*(?=\??\:\snumber)/;
        let numberMemberString = '';
        if (members[0].endsWith('number')) {
            numberMemberString += `${linestart}${numberMemberRegex.exec(members[0])}: $${this.placeholder}`;
            this.placeholder++;
        }
        return numberMemberString;
    }
    writeBooleanMember(members, linestart) {
        const numberMemberRegex = /\w*(?=\??\:\sboolean)/;
        let numberMemberString = '';
        if (members[0].endsWith('boolean')) {
            numberMemberString += `${linestart}${numberMemberRegex.exec(members[0])}: $${this.placeholder}`;
            this.placeholder++;
        }
        return numberMemberString;
    }
    writeStringMember(members, linestart) {
        const stringMemberNameRegex = /\w*(?=\??\:\sstring)/;
        let stringMemberString = '';
        if (members[0].endsWith('string')) {
            stringMemberString += `${linestart}${stringMemberNameRegex.exec(members[0])}: '$${this.placeholder}'`;
            this.placeholder++;
        }
        return stringMemberString;
    }
    commentOptionalMembers(members, linestart) {
        if (this.isOptionalMember(members)) {
            linestart += '//';
        }
        return linestart;
    }
    isOptionalMember(members) {
        return members[0].indexOf('?') >= 0;
    }
    setTrailingComma(isFirst, membersAsString) {
        if (!isFirst) {
            membersAsString += ',';
        }
        return membersAsString;
    }
    prepareLineStartCharacters(level) {
        let linestart = '\n';
        for (let index = 0; index < level; index++) {
            linestart += '\t';
        }
        return linestart;
    }
}
exports.ConfigGenerator = ConfigGenerator;
