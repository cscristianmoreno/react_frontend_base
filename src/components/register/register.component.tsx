import { FormEvent } from "react";
import RequestService from "../../services/request.service";

const RegisterComponent = () => {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const form: FormData = new FormData(event.currentTarget);
        await RequestService.post("/register", form);
        alert("Usuario creado");
    }

    return (
        <form onSubmit={(ev) => handleSubmit(ev)} method="POST">

            <input name="name" placeholder="Nombre"/>
            <input name="lastname" placeholder="Apellido"/>
            <input name="email" placeholder="Email"/>
            <input name="password" placeholder="Password"/>

            <button type="submit">Te has registrado</button>
        </form>
    )
}

export default RegisterComponent;