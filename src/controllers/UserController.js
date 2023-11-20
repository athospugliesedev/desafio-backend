import AuthUseCase from '../usecases/AuthUseCase.js';

const authUseCase = new AuthUseCase();

async function signup(req, res, next) {
  try {
    const { nome, email, senha, telefones } = req.body;
    const user = await authUseCase.signupUser({ nome, email, senha, telefones });

    const responseData = {
      id: user.id,
      data_criacao: user.data_criacao,
      data_atualizacao: user.data_atualizacao,
      ultimo_login: user.ultimo_login,
      token: await authUseCase.generateAuthToken(user.id),
    };

    res.json(responseData);
  } catch (error) {
    next(error);
  }
}
async function signin(req, res, next) {
  try {
    const { email, senha } = req.body;
    const token = await authUseCase.signinUser({ email, senha });
    res.json(token);
  } catch (error) {
    next(error);
  }
}


function protectedRoute(req, res) {
  res.json({ message: 'Esta é uma rota protegida', user: req.user });
}

export { signup, signin, protectedRoute };
