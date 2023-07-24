import PrevArt from "./PrevArt";

function PrevCont(props) {
  return (
    <div className="cArtView">
      <PrevArt
        title="제목이 조금 길어져도 괜찮은걸깡아아아"
        type={props.type}
        link=""
        likes="50"
        date="Date"
      />
      <hr />
      <PrevArt title="Title" link="" likes="50" date="Date" />
      <hr />
      <PrevArt title="Title" link="" likes="50" date="Date" />
      <hr />
      <PrevArt title="Title" link="" likes="50" date="Date" />
      <hr />
      <PrevArt title="Title" link="" likes="50" date="Date" />
      <hr />
      <PrevArt title="Title" link="" likes="50" date="Date" />
      <hr />
      <PrevArt title="Title" link="" likes="50" date="Date" />
    </div>
  );
}

export default PrevCont;
