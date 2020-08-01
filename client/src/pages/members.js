import React, { Component } from "react";
import API from "../utils/API";
import Vehicles from "../components/vehicles/vehicles";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Subtitle from "../components/subtitle/subtitle";


class Members extends Component {
    state = {
        userId: 40,
        vehicle: []
    }

    // componentDidMount() {
    //     API.userData()
    //         .then((res) => {
    //             this.setState({
    //                 userId: res.data.id
    //             })
    //                 .then(() => {
    //                     let id = this.state.userId
    //                     this.getVehicles(id)
    //                 })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // };

    componentDidMount() {
        API.allVehicles(this.state.userId)
            // console.log("00000000000000000 mounting")
            .then(res => {
                console.log("api returned for members", res);
                this.setState({
                    vehicle: res.data
                }
                )
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <br />
                <Card>
                    <Header
                        className={"tile box mt-5 has-text-centered container-center vehicle-style"}
                        value={"Welcome"} />
                </Card>
                <br />
                <Card>
                    <Subtitle className={"subtitle label"} value={"Your Vehicles"} />
                    <div className="section">
                        {this.state.vehicle.map(vehicles => (
                            <span key={vehicles.id}>
                                <Vehicles
                                    vehicle={vehicles}
                                />
                            </span>
                        ))}
                    </div>
                </Card>
                <Router>
                    <Link to="/vehicles" />
                </Router>
            </div>
        );
    }
}
export default Members;