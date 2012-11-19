var Static = require("robohydra").heads.RoboHydraHeadStatic;
var Proxy = require("robohydra").heads.RoboHydraHeadProxy;
var Fs = require("robohydra").heads.RoboHydraHeadFileSystem;

exports.getBodyParts = function(conf) {
    return {
        heads: [
            new Static({
                name: 'Download new items API',
                path: '/api/items',
                content: {
                    "result" : "ok",
                    "content" : [
                        {
                            "id" : 1,
                            "timestamp" : 1352905061,
                            "title" : "Moderátoři Bouček s Vágnerem budou v obležení překrásných dívek. Víme proč"
                        },
                        {
                            "id" : 2,
                            "timestamp" : 1352905062,
                            "message" : "Kdysi velká láska oficiálně skončila: Nora a Braňo Mojsejovi jsou rozvedení"
                        },
                        {
                            "id" : 3,
                            "timestamp" : 1352905063,
                            "message" : "Koukejte na to! Dopita už po Agátě netruchlí: Na párty líbal a osahával jednu holku za druhou"
                        }
                    ]
                }
            }),

            new Static({
                name: 'Check new items ERROR',
                path: '/api/check',
                content: {
                    "result" : "fail",
                    "content" : []
                }
            }),

            new Static({
                name: 'Check new items',
                path: '/api/check',
                content: {
                    "result" : "ok",
                    "content" : [1,2,3]
                }
            }),

            new Proxy({
                name: 'etc.',
                mountPath: '/',
                proxyTo: 'http://www.medio.cz/',
                setHostHeader: true
            })

        ]
    };
};