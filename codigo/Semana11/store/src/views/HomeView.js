import GrupoProdHome from "../components/GrupoProdHome"
import GroupCategoria from "../context/GroupCategoria"
import HeaderCarouse from "../context/HeaderCarouse"

export default function HomeView() {
    return (
        <>
            <HeaderCarouse/>
            <h2 className="text-center my-4">
                Categorías
            </h2>
            <GroupCategoria/>
            <h2 className="text-center my-4">
                Últimas novedades
            </h2>
            <GrupoProdHome />
        </>
    )
}
