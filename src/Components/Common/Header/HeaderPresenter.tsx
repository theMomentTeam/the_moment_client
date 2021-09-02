import * as S from "./styled";
import * as I from "Asset/Svg";
import { Link } from "react-router-dom";
import { useLogout } from "./HeaderContainer";
import { useRecoilState } from "recoil";
import { HasAdminToken } from "Atom";
import { useEffect, useState } from "react";
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Config from "Constants/Config.json";

const Header: React.FC = () => {
  const tryLogout = useLogout();
  const [logged, setHasToken] = useRecoilState(HasAdminToken);
  const [bars, setBars] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("themoment_token")) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  });

  return (
    <S.Header>
      <Link to={Config.LINK.COMMENT}>
        <S.Logo>
          <I.Logo />
        </S.Logo>
        <span>학교가 불편한 순간</span>
      </Link>
      {!logged ? (
        <S.HeaderNav active={bars}>
          <Link to={Config.LINK.COMMENT}>의견 남기기</Link>
          <Link to={Config.LINK.RANK}>Top 30</Link>
          <Link to={Config.LINK.IMPROVMENT}>실제 개선 사례</Link>
          <Link to={Config.LINK.ABOUT}>캠페인 자세히 보기</Link>
        </S.HeaderNav>
      ) : (
        <S.HeaderNav active={bars}>
          <Link to={Config.LINK.RANK}>답변달기</Link>
          <Link to={Config.LINK.IMPROVMENT}>실제 개선 사례 작성</Link>
          <button
            onClick={() => {
              tryLogout();
            }}
          >
            로그아웃
          </button>
        </S.HeaderNav>
      )}
      <S.BarWrapper>
        <FontAwesomeIcon
          icon={bars ? faBars : faChevronUp}
          onClick={() => setBars(!bars)}
        />
      </S.BarWrapper>
    </S.Header>
  );
};

export default Header;
