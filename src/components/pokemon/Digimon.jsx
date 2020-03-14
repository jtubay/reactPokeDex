import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import { Digimon } from '../Digimon'

describe('<Digimon />', () => {
    const defaultProps = {}
    const wrapper = renderer.create(
        <Provider store={store}>
         <Digimon {...defaultProps} />
        </Provider>,
    )

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
