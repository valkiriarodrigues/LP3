import { Router } from 'express';
import { LancamentoController } from '../controller/LancamentoController';
import { UsuarioController } from '../controller/UsuarioController';
import { Lancamento } from '../entity/Lancamento';


export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController();

//servço para salvar um novo laçamento
routerLancamento.post('/', async(req, res) => {
    const {idUsuario, valor, descricao, data} = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
    if(usuario){
        const lancamento = new Lancamento(valor, descricao, data, usuario);
        const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento);
        res.json(lancamentoSalvo);
    } else {
        res.status(404).json({mensagem: 'Usuário do laçamento não escontrado'});  
    }


/** routerLancamento.put('/payload/:id' , async(req, res) => {
    const payload = req.body;
    const idLancamento = parseInt(req.params.idLancamento);  */

const idPut = parseInt(req.params.idPut);
const payload = req.body;



 routerLancamento.delete('/:id', async (req, res) => {
    const deletarLancamento = parseInt(req.params.id);
    const lancamento = await lancamentoCtrl. deletar(deletarLancamento);
    if(lancamento){
        res.status(500).json({mensagem: 'Lançamento deletado com sucesso'})
    }else{
        res.status(404).json({ mensagem: 'Lançamento não encontrado, impossivel deletar' });
    }
});   
/**routerLancamento.get('usuario/lancamentos/entradas/:id', async(req, res)=> {    
}); */
})



    
 
 

 


