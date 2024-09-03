import "./Popup.css";
export const Popup = ({
  isOpen,
  setIsOpen,
  isShowCat,
  setShowCat,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isShowCat: boolean;
  setShowCat: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className={`layout ${isShowCat ? "ModalOpen" : "ModalClosed"}`}>
            <div className="catTitle">턱시도고양이</div>
            <div className="contents">
              우리 턱시도고양이는요 아주아주 베리 뷰티풀~
            </div>
            <div
              className="buttonGroup"
              onClick={() => {
                setIsOpen(() => false);
                setShowCat(() => false);
              }}
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
};
