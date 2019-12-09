type CallbackError = Error | null;
type Callback = (error: CallbackError, response: Object) => void;

function sendRequest(cb: Callback): void {
    if (cb) {
        cb(null, {message: "OK"});
    }
}