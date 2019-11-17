import {PluralOptions} from "./plural-options";

export function plural(value: number, options: PluralOptions) {
    function _(str: string) {
        return str.replace(/##/g, value.toString());
    }

    if (value % 100 === 11) {
        return _(options.many);
    }

    if (options.none) {
        if (value === 0) {
            return _(options.none);
        }
    }

    let m10 = value % 10;

    if (m10 === 0) {
        return _(options.many);
    }

    if (m10 === 1) {
        return _(options.one);
    }

    if (m10 >= 2 && m10 <= 4) {
        return _(options.few);
    }

    if (m10 >= 5 && m10 <= 9) {
        return _(options.many);
    }
}
