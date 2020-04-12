export type Session = {
    AccessToken: string;
    ApiGatewayUri: string;
    ApiGatewayVersion: string;
}


export type Metadata = {
    date: string;
    duration: number;
    title: string;
    playbackUrl: string;
    posterImage: string;
}


interface Errors {
    [key: number]: string
}

// I didn't use an enum because there is no real advantage that i can find and
// we can't use multiline string for long errors
// TODO: create better errors descriptions
export const Errors: Errors = {
    22: 'FFmpeg is missing.\n' +
        'Destreamer requires a fairly recent release of FFmpeg to download videos.\n' +
        'Please install it in $PATH or copy the ffmpeg binary to the root directory (next to package.json).',

    33: "Can't split videoId from videoUrl\n",

    44: "Couldn't evaluate sessionInfo on the page\n",

    55: 'Running in an elevated shell\n',

    66: 'No valid URL in the input\n',

    0: "Clean exit with code 0."
}