import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState:{
        products: [
            {name:'dva',id:0},
            {name:'antd',id:2},
            {name:'3',id:3},
            {name:'4',id:4},
            {name:'5',id:5},
            {name:'6',id:6},
            {name:'7',id:7},
            {name:'8',id:8},
            {name:'9',id:9},
            {name:'10',id:10},
            {name:'11',id:11},
            {name:'12',id:12},
            {name:'13',id:13},
            {name:'14',id:14},

        ]
    }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
