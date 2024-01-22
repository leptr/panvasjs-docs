export function Item({ name, body }) {
  return (
    <>
      <div className="item">
        <span className="item-name">{name}</span>
        <span className="item-body">{body}</span>
      </div>
    </>
  );
}
