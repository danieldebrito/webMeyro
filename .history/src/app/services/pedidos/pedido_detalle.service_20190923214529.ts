import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { PedidoDetalle } from 'src/app/clases/pedido_detalle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoDetalleService {

  constructor(public miHttp: BaseService) { }

  public altaPedidoDetalle(
  id_pedido: void,  // pongo void, que devuelve el obserbable, ya que number rompia
  id_articulo: string,
  cantidad: number
  ): Promise<Object> {
      const request: Object = {
        id_pedido: id_pedido,
        id_articulo: id_articulo,
        cantidad: cantidad
    };
    return this.miHttp.httpPostP('/pedidos_detalle/', request);
  }  // alta

  public traerUno(id: string): Observable<PedidoDetalle> {
    return this.miHttp.httpGetO<PedidoDetalle>('/pedidos_detalle/' + '"' + id + '"');
  }  // trae uno por id
}
