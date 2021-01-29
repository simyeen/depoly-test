import Joi from '@hapi/joi';
import User from '../../models/user';

export const register = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.reguest.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.cody;
  try {
    //username이 이미 존재하는지 확인한다.
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    //중복 아이디 체크 완료 후 비밀번호 설정되게하기.
    const user = new User({
      username,
    });
    await user.setPassword(password); // setting password
    await user.save(); // for saving in DataBase

    const data = user.toJSON(); //응답할 데이터에서 hashedPassword필드 제거.
    delete data.hashedPassWowrd;
    ctx.body = data;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {};
export const check = async (ctx) => {};
export const logout = async (ctx) => {};
