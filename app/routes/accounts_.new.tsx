//import Index from "./_index";
export default function NewAccountRoute() {
    return (
      <div>
        <p>You will create account Here..</p>
        <form method="post">
          <div>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Content: <textarea name="content" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
        
      </div>
    );
  }
  