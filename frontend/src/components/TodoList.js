function TodoList(){
    return(
        <div className="d-flex flex-column gap-1">
            <h1>Todo</h1>
            <div className="form-check form-check-inline rounded bg-info align-content-start">
              <input 
                className="form-check-input border-secondary" 
                type="checkbox"
                title="completed"
              />
              <label className="text-start">something j asdkj as w e w ;oi todoaslfjsldf alsdfj asldfjasdfjlasj a;sldf lkasjdfouer pou alsdfj asldfj</label>
            </div>

            <div className="form-check form-check-inline rounded bg-info align-content-start">
              <input
                className="form-check-input border-secondary" 
                type="checkbox"
                title="completed"
              />
              <label className="text-start">something j asdkj as w e w ;oi todoaslfjsldf alsdfj asldfjasdfjlasj a;sldf lkasjdfouer pou alsdfj asldfj</label>
            </div>

        </div>
    )
}

export default TodoList;