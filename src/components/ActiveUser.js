import React from "react";

export default ({ data, active}) => {
    if (!data || !data[active]) {return <h4> Nothing found :(</h4>;}
    const user = data[active];

    return (
        <div className="thumbnail">
            <img src={`../../images/${user.image}.jpg`} alt="" />
            <div className="thumbnail-caption">
                <h3>{user.name}</h3>
                <table className="user-info table table-responsive">
                    <tbody>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{user.image}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{user.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <p><b>Favorite phrase: </b>{user.phrase}</p>
            </div>
        </div>
    );
}
