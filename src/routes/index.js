import ColorRouter from './colorRouter';
import DropdownRouter from './dropdownRouter';
import ImageRouter from './imageRouter';

const initRouters = (app) => {
    app.use('/image-api/', ImageRouter)
    app.use('/color-api', ColorRouter)
    app.use('/dropdown-api', DropdownRouter)

    return app.use('/', (req, res) => {
        res.send("Server on...");
    })
}

export default initRouters