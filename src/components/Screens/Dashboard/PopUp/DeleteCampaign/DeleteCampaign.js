import PopUphp2b from "../../../../Elements/PopUp/PopUphp2b";

const DeleteCampaign = (props) => {
  return (
    <PopUphp2b heading="Delete campaign useremail@gmail.com?" parah="Do you really want to delete this inbox from your account?" close={{ function: props.close.function, value: props.close.value }}/>
  );
};

export default DeleteCampaign;
