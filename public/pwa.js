let newWorker;

function listenForWaitingServiceWorker(e, r) {
    e && e.waiting && (newWorker = e.waiting)
}
"serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then(e => {
    let r;
    listenForWaitingServiceWorker(e), e.addEventListener("updatefound", () => {
        (newWorker = e.installing).addEventListener("statechange", () => {
            switch (newWorker.state) {
                case "installed":
                    navigator.serviceWorker.controller && newWorker.postMessage({
                        action: "skipWaiting"
                    })
            }
        })
    }), navigator.serviceWorker.addEventListener("controllerchange", function () {
        r || (window.location.reload(), r = !0)
    })
}).catch(e => console.log("sw not registered", e));