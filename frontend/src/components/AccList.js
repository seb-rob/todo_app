function AccList(){
    return(
        <div className="d-flex flex-column gap-1">
            <h1>Accomplished</h1>
            <div className="form-check form-check-inline rounded bg-secondary align-content-start">
              <input
                className="form-check-input border-secondary" 
                type="checkbox"
                title="incomplete"
              />
              <label className="text-start text-white text-decoration-line-through">something j asdkj as w e w ;oi todoaslfjsldf alsdfj asldfjasdfjlasj a;sldf lkasjdfouer pou alsdfj asldfj</label>
            </div>
            <div className="form-check form-check-inline rounded bg-secondary align-content-start">
              <input 
                className="form-check-input border-secondary" 
                type="checkbox"
                title="incomplete"
              />
              <label className="text-start text-white text-decoration-line-through">something j asdkj as w e w ;oi todoaslfjsldf alsdfj asldfjasdfjlasj a;sldf lkasjdfouer pou alsdfj asldfj</label>
            </div>
        </div>
    )
}

export default AccList;