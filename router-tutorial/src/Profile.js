import React from 'react';



const data = {
  veloport: { name: '김민준', description: '리액트를 좋아하는 개발자' },
  gildong: { name: '홍길동', description: '고전 소설 홍길동전의 주인공' },
};

const Profile = ({ match }) => {
  const { username } = match.params; // router를 통해서 받은 params
  const profile = data[username]; // 이 컴퍼넌트에 존재하는 정보.

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        ?{username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
