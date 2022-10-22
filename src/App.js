import MyForms from "./components/MyForms";
import { Grid } from '@mui/material';
import MyTable from "./components/MyTable";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={6}>
                        <MyForms />
                    </Grid>
                    <Grid item xs={12} md={8} lg={6}>
                        <MyTable />
                    </Grid>
                </Grid>
            </Provider>
        </>
    )
}
export default App;