namespace web {
    const CHANNEL = "web"

    function sendJSON(json: any) {
        const msg = JSON.stringify(json)
        const buf = Buffer.fromUTF8(msg);
        control.simmessages.send(CHANNEL, buf)
    }

    /**
     * Opens a new browser window to the given URL.
     * In order for this to work, you will need to follow
     * the instructions in the README. This will not do 
     * anything in arcade.makecode.com out of the box.
     */
    export function open(url: string) {
        sendJSON({
            action: "open",
            url: url
        })
    }
}