export class RestAdapter {
    async getItems(state, filterIds = []) {
        return await (await fetch(`${state.params.apiBaseUrl}/products?productIds=${filterIds.join(',')}`)).json()
    }

    async search(state) {
        return { items: await (await fetch(`${state.params.apiBaseUrl}/products?keyword=${state.searchText}`)).json() }
    }

    exportItem(item) {
        return item.id;
    }
}
