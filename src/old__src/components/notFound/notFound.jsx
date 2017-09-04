import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(props){
    return (
        <div className="container">
            <div className="row">
                <div className=" alert alert-danger" role="alert">
                   <p className="text-center">
                        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                        <br/>
                        404 страница не найдена
                    </p>
                </div>
                    <div className="text-center">
                        <Link className="btn btn-primary" to="/"> Перейти на главную </Link>
                    </div>
            </div>
        </div>
    );
};

export default NotFound;