import { expect } from "chai";
import { ConfigGenerator } from "../src/ConfigGenerator";
import path = require('path');

describe('Generator', function () {

    let generator: ConfigGenerator
    const absolutePath = path.resolve('./test/testinterfaces/Root.interface.ts')

    beforeEach(function () {
        generator = new ConfigGenerator()
    })

    it('returns the name of the interface', function () {
        const result = generator.generate(absolutePath)

        expect(result).to.match(/Root.*/)
    })

    it('returns the interface and its primitve string field', function () {
        const result = generator.generate(absolutePath)
        expect(result).to.match(/\n\tprimitiveString: '\$0'/)
    })

    it('returns the interface and its primitve number field', function () {
        const result = generator.generate(absolutePath)
        expect(result).to.match(/,\n\tprimitiveNumber: \$1/)
    })

    it('returns the interface and its primitve boolean field', function () {
        const result = generator.generate(absolutePath)
        expect(result).to.match(/,\n\tprimitiveBoolean: \$5/)
    })

    it('returns the interface and its custom type field', function () {
        const result = generator.generate(absolutePath)
        expect(result).to.match(/,\n\tcustomType: {\n\t\tsimple: '\$2'/)
    })

    it('adds optional fields in comments', function () {
        const result = generator.generate(absolutePath)
        expect(result).to.match(/,\n\t\/\/optionalField: \$4/)
    })
})