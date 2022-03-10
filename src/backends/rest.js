export class RestAdapter {
    async getItems(state, filterIds = []) {
        return (await (await fetch(`${state.params.apiBaseUrl}/products?productIds=${filterIds.join(',')}`)).json()).results
    }

    async search(state) {
        return { items: (await (await fetch(`${state.params.apiBaseUrl}/products?keyword=${state.searchText}`)).json()).results }
    }

    exportItem(item) {
        return item.id;
    }
}
