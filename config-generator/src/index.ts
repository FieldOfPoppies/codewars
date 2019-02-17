import { ConfigGenerator } from "./ConfigGenerator"
import * as path from 'path'

const generator = new ConfigGenerator()
console.log(
    generator.generate(path.resolve('./../../test/testinterfaces/Root.interface.ts'))
)