import ColorRouter from './colorRouter';
import ImageRouter from './imageRouter';

const initRouters = (app) => {
    app.use('/image-api/', ImageRouter)
    app.use('/color-api', ColorRouter)


    return app.use('/', (req, res) => {
        res.send("Server on...");
    })
}

export default initRouters