export default function Footer() {
    return (
        <footer className="text-bg-primary">
            <div className="container py-5">
                <form className="col-md-8 col-lg-6">
                    <h3 className="display-5 text-white">Report an evidence of corruption:</h3>
                    <div className="mb-3 row">
                        <label htmlFor="exampleInputEmail1" className="col-sm-3 col-form-label">Email address</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-white-50">We'll never share your email with
                                anyone else.</small>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="exampleFormControlTextarea1" className="col-sm-3 col-form-label">Message</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="formFile" className="col-sm-3 col-form-label">Additional files</label>
                        <div className="col-sm-9">
                            <input className="form-control" type="file" id="formFile"/>
                        </div>
                    </div>

                    <button type="button" className="btn btn-warning d-block ms-auto me-0 mt-3 px-5">Submit</button>
                </form>
            </div>
        </footer>
    )
}