import JWT from 'jsonwebtoken'

const generateToken = (id) =>{
    return JWT.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

export default generateToken 