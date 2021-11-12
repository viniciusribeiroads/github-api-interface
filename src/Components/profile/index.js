import * as S from './styled';

const  Profile = () => {
  return (
    <S.Wrapper>
        
        <S.WrapperImage
          src="https://avatars.githubusercontent.com/u/70332384?v=4"  alt="avatar of user"/>

          <S.WrapperInfosUser>
          <div>
            <h1>Vinicius Ribeiro</h1>
          
          <S.WrapperUsername>
            <h3>Username:</h3>
            <a href="https://github.com/viniciusribeiroads" 
            target='_blank'
            rel="noreferrer"
            >viniciusribeiroads</a>
          </S.WrapperUsername>
          </div>
          <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>
          </div>
          </S.WrapperStatusCount>
          </S.WrapperInfosUser>
        
    </S.Wrapper> 
  );
}

export default Profile;