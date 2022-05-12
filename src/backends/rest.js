import axios from 'axios'
export class RestAdapter {
    async getItems(state, filterIds = []) {
        // return await (await fetch(`${state.params.apiBaseUrl}/products?productIds=${filterIds.join(',')}`)).json()
        return (await axios.post(state.params.apiBaseUrl, {
            args: {
                productIds: filterIds.join(',')
            },
            operation: "getProducts"
        })).data
    }

    async search(state) {
        // return { items: await (await fetch(`${state.params.apiBaseUrl}/products?keyword=${state.searchText}`)).json() }
        return {
            items: (await axios.post(state.params.apiBaseUrl, {
                args: {
                    keyword: state.searchText
                },
                operation: "getProducts"
            })).data
        }
    }

    exportItem(item) {
        return item.id;
    }
}
