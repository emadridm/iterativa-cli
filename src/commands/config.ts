import {Args, Command, Flags} from '@oclif/core'
import IterativaConfig from '@iterativa/core/config'

export default class Config extends Command {
    static override args = {
        option: Args.string({description: "the Iterativa ecosystem's option"}),
        value: Args.string({description: 'the value for the option'}),
    }

    static override description = "Get and set the Iterativa ecosystem's options"

    static override examples = ['<%= config.bin %> <%= command.id %>']

    static override flags = {
        // flag with no value (-s, --show)
        show: Flags.boolean({char: 's', description: 'a des', default: false}),
    }

    public async run(): Promise<void> {
        const {args, flags} = await this.parse(Config)

        const settings = new IterativaConfig()

        if (flags.show) {
            // get
            if (args.option) {
                console.log(settings.get<string>('' + args.option))
            }
        } else {
            // set
            if (args.option && args.value) {
                settings.set(args.option, args.value)
            } else {
                this.log('set a value for the option')
            }
        }
    }
}
