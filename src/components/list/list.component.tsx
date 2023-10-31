import { useEffect, useState } from "react";
import { userStruct } from "../../models/user.model";
import RequestService from "../../services/request.service";
import { AxiosResponse } from "axios";
import "./list.component.css";

const ListComponent = () => {
    const [users, setUsers] = useState<userStruct[]>([]);

    useEffect(() => {

        const getAllUsers = async (): Promise<void> => {
            const response: AxiosResponse<userStruct[]> = await RequestService.get("/users");

            if (response.status !== 200) {
                return;
            }

            setUsers(response.data);
        }
        
        getAllUsers();
    }, []);

    if (!users.length) {
        return null;
    }

    return (
        <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Passwowrd</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map((str: userStruct, num: number) => {
                return (
                    <tr>
                        <td key={num}>{str.name}</td>
                        <td key={num}>{str.lastname}</td>
                        <td key={num}>{str.email}</td>
                        <td key={num}>{str.password}</td>
                    </tr>
                );
            })
        }
        </tbody>
        </table>
    )
}

export default ListComponent;