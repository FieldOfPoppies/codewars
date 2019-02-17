"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ConfigGenerator_1 = require("../src/ConfigGenerator");
const path = require("path");
describe('Generator', function () {
    let generator;
    const absolutePath = path.resolve('./test/testinterfaces/Root.interface.ts');
    beforeEach(function () {
        generator = new ConfigGenerator_1.ConfigGenerator();
    });
    it('returns the name of the interface', function () {
        const result = generator.generate(absolutePath);
        chai_1.expect(result).to.match(/Root.*/);
    });
    it('returns the interface and its primitve string field', function () {
        const result = generator.generate(absolutePath);
        chai_1.expect(result).to.match(/\n\tprimitiveString: 'yourValue'/);
    });
    it('returns the interface and its primitve number field', function () {
        const result = generator.generate(absolutePath);
        chai_1.expect(result).to.match(/,\n\tprimitiveNumber: 0/);
    });
    it('returns the interface and its primitve boolean field', function () {
        const result = generator.generate(absolutePath);
        chai_1.expect(result).to.match(/,\n\tprimitiveBoolean: false/);
    });
    it('returns the interface and its custom type field', function () {
        const result = generator.generate(absolutePath);
        chai_1.expect(result).to.match(/,\n\tcustomType: {\n\t\tsimple: 'yourValue'/);
    });
    it('adds optional fields in comments', function () {
        const result = generator.generate(absolutePath);
        chai_1.expect(result).to.match(/,\n\t\/\/optionalField: 0/);
    });
});
