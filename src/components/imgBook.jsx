import 'bootstrap/dist/css/bootstrap.min.css';

export function ImgBook({infoBook}){
    //verificar->Add the URL of the objects's image to the code
    // const imgURL = infoBook.volumenInfo.imageLinks.smallThumbnail.valueOf();
    // const bookTitle = infoBook.volumenInfo.title.valueOf();
    return(
        <div className="col-1">
            <img
            className="d-block w-100"
            src="https://via.placeholder.com/150x300"
            alt="First slide"
            />
        </div>
    )
}