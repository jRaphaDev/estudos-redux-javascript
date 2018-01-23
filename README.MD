
# 3 Pilares do redux:

1- Um único ponto de verdade – Todo o estado da aplicação é mantido em apenas um único objeto chamado de Store.

2- O estado é imutável – O estado da aplicação é inalterável, a unica maneira de afeta-lo é emitindo uma Action com a mudança.

3- Mudanças são feitas apenas por funções puras – Reducers recebem as Actions emitidas e aplicam-nas ao estado. Sempre retornando um novo estado.