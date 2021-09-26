import React from 'react';
import './Budget.css'
const Budget = () => {
    return (
        // budget Component 
        <div className="budget py-1 border-bottom border-top border-secondary shadow-sm">
            <div className="container text-center">
                <h4 className="border-bottom border-2 border-primary pb-2 d-inline">Build Your Own Military Force</h4>
                <p className="mt-3 mb-0">Total Budget: <span className="text-danger fw-bold fs-5">$ 1 Billion</span> </p>
            </div>
        </div>

    );
};

export default Budget;