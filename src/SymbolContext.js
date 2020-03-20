import React, { Component } from 'react'

const SymbolContext = React.createContext()

class SymbolProvider extends Component {

    state = {
        sym: ''
    }

    setSym = sym => {
        this.setState(prev => {
            let temp = prev
            temp.sym = sym
            return temp
        })
    }

    render() {
        
        const { children } = this.props
        const { sym } = this.state
        const { setSym } = this
        
        return (
            <SymbolContext.Provider value={{ sym, setSym }}>
                {children}
            </SymbolContext.Provider>
        )
    }
}

export default SymbolContext

export { SymbolProvider }