const MenuIcon = () => (
  <>
    <div>
      <div className="menu_line">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
    <style>
      {`
        .menu_line {
          height: 17px;
          width: 29px;
        }
        .menu_line .line {
          position: relative;
          display: block;
          margin-bottom: 8px;
          height: 1px;
          background-color: #D9D9D9;
          transition: background .2s ease-in-out;
          transition-delay: 1s;
        } 
        .menu_line:focus .line:nth-child(1){
          transform-origin: top left;
          transform: rotate(40deg);
        }
        .menu_line:focus .line:nth-child(3){
          transform-origin: bottom left;
          transform: rotate(320deg);
        }
        .menu_line:focus .line:nth-child(2){
          opacity: 0;
        }
      `}
    </style>
  </>
);
export { MenuIcon };
