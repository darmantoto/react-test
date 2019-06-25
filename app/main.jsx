
import React from 'react';
import ReactDOM from 'react-dom';

import { GridWithState as Grid } from './with-state.jsx';
import { GridColumn } from '@progress/kendo-react-grid';

import products from './products.json';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <Grid
                    data={products}
                    style={{ height: '540px' }}
                    sortable={
                      {
                        //allowUnsort: this.state.allowUnsort,
                        mode: 'multiple',
                      }
                    }
                    pageSize={10}
                    pageable={true}
                    groupable={true}
                    filterable={true}
                    reorderable={true}
                    resizable={true}
                >
                    <GridColumn field="ProductName" title="Product Name" />
                    <GridColumn field="UnitsInStock" title="Units" classname="grid-center" filter="numeric" editor="numeric" />
                </Grid>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);

