function handleOk(message) {
    return this.json({
        status: "ok",
        statusCode: 200,
        message
    });
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export {
    sleep,
    handleOk
}