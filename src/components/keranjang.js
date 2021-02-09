import React, { Component } from "react"
import cart from "../cart.svg"
import product from "../product.svg"
import $ from "jquery"

export class keranjang extends Component {
	constructor() {
		super()
		this.state = {
			produk: [
				{
					nama: "ACCELERATOR SATU ELITE IN-SILVER/BLACK/EMPEROR RED",
					nama_singkat: "ACCELERATOR SATU",
					harga: 639840,
					gambar: "ACCELERATOR SATU ELITE IN-SILVER-BLACK-EMPEROR RED.jpg",
				},
				{
					nama: "ACCELERATOR LIGHTSPEED II PRO IN-FLAME/BLUE ATOLL",
					nama_singkat: "ACCELERATOR LIGHTSPEED II",
					harga: 384860,
					gambar: "ACCELERATOR LIGHTSPEED II PRO IN-FLAME-BLUE ATOLL.jpg",
				},
				{
					nama: "ACCELERATOR LIGHTSPEED 20 FG-BLACK/ DARK GULL GREY/SILVER",
					nama_singkat: "ACCELERATOR LIGHTSPEED 20",
					harga: 439840,
					gambar:
						"ACCELERATOR LIGHTSPEED 20 FG-BLACK - DARK GULL GREY - SILVER.jpg",
				},
				{
					nama: "OPTIMUS SOCKS - BLACK",
					nama_singkat: "OPTIMUS SOCKS",
					harga: 44800,
					gambar: "OPTIMUS SOCKS - BLACK.png",
				},
			],
			keranjang: [
				{
					nama: "CHROMA FS BALL-WHITE/GREY/RED/RED",
					nama_singkat: "CHROMA FS BALL",
					harga: 199800,
					gambar: "CHROMA FS BALL-WHITE-GREY-RED-RED.jpg",
					jumlah: 1,
				},
			],
			ongkir: 20000,
		}
	}
	TambahBarang = (item) => {
		let tempKeranjang = this.state.keranjang,
			index = tempKeranjang.indexOf(item)
		tempKeranjang[index].jumlah++
		this.setState({ keranjang: tempKeranjang })
	}
	KurangiBarang = (item) => {
		let tempKeranjang = this.state.keranjang,
			index = tempKeranjang.indexOf(item)
		if (
			tempKeranjang[index].jumlah === 1 &&
			window.confirm(
				`Anda Yakin Ingin Menghapus ${item.nama} Dari Keranjang Belanja?`
			)
		) {
			tempKeranjang[index].jumlah--
			tempKeranjang.splice(index, 1)
			this.state.produk.push(item)
		} else if (tempKeranjang[index].jumlah != 1) {
			tempKeranjang[index].jumlah--
		}
		this.setState({ keranjang: tempKeranjang })
	}
	TambahBarangKeranjang = () => {
		$("#modal").modal("show")
	}
	TambahKeKeranjang = (item) => {
		let tempKeranjang = this.state.keranjang,
			tempProduk = this.state.produk,
			index = tempProduk.indexOf(item)
		item.jumlah = 1
		tempKeranjang.push(item)
		tempProduk.splice(index, 1)
		this.setState({ keranjang: tempKeranjang, produk: tempProduk })
	}
	Price = (price) => {
		let arrPrice = String(price).match(/-?\d/g).map(Number).reverse(),
			loop = 0,
			res = ""
		price = []
		arrPrice.forEach((element) => {
			if (loop === 3) {
				price.push(".")
				loop = 0
			}
			price.push(element)
			loop++
		})
		price.reverse()
		price.forEach((element) => {
			res += element.toString()
		})
		return res
	}
	totalHarga = () => {
		let totalHargaBarang = 0
		this.state.keranjang.forEach((element) => {
			totalHargaBarang += element.harga * element.jumlah
			console.log(totalHargaBarang)
		})
		return totalHargaBarang + this.state.ongkir
	}

	render() {
		return (
			<div className=''>
				<h2 className='m-3 text-left pl-5'>Keranjang saya</h2>
				<div className='row'>
					{(() => {
						if (this.state.keranjang.length != 0) {
							return (
								<div className='col-7'>
									{this.state.keranjang.map((item, index) => (
										<div className='row ml-5 border p-3'>
											<div className='row'>
												<div className='col-5'>
													<img
														src={
															process.env.PUBLIC_URL + "/image/" + item.gambar
														}
														className='img-thumbnail'
														alt={item.nama}
													/>
												</div>
												<div className='col-7'>
													<h3 className='text-dark text-left'>{item.nama}</h3>
													<h6 className='text-dark text-left'>
														Harga: Rp {this.Price(item.harga)}
													</h6>
													<div className='row col-9 mt-5'>
														<div className='col-3'>
															<button
																type='button'
																className='btn btn-danger px-3'
																onClick={() => this.KurangiBarang(item)}
															>
																-
															</button>
														</div>
														<div className='col-5 border'>
															<p className='align-middle'>{item.jumlah}</p>
														</div>
														<div className='col-3'>
															<button
																type='button'
																className='btn btn-success px-3'
																onClick={() => this.TambahBarang(item)}
															>
																+
															</button>
														</div>
													</div>
													<h4 className='text-left mt-4'>
														Rp : {this.Price(item.harga * item.jumlah)}
													</h4>
												</div>
											</div>
										</div>
									))}
								</div>
							)
						}
						return (
							<div className='col-12'>
								<button
									type='button'
									className='btn btn-success px-3 m-2'
									onClick={this.TambahBarangKeranjang}
								>
									Tambah Barang
								</button>
								<h3 className='m-3'>Keranjang Belanja Anda Kosong</h3>
								<div
									style={{
										backgroundImage: `url(${cart})`,
										backgroundSize: "contain",
										backgroundRepeat: "no-repeat",
										height: "55vh",
										backgroundPosition: "center",
									}}
								></div>
							</div>
						)
					})()}
					{(() => {
						if (this.state.keranjang.length != 0) {
							return (
								<div className='col-4 ml-2'>
									<div className='border'>
										<button
											type='button'
											className='btn btn-success px-3 m-2'
											onClick={this.TambahBarangKeranjang}
										>
											Tambah Barang
										</button>
										<h4>Detail Biaya</h4>
										<div>
											{this.state.keranjang.map((item, index) => (
												<div className='row'>
													<div className='col-8 text-left ml-2'>
														{item.nama_singkat} x{item.jumlah}
													</div>
													<div className='col' className='text-right'>
														Rp : {this.Price(item.harga * item.jumlah)}
													</div>
												</div>
											))}
											<div className='row'>
												<div className='col-8 text-left ml-2'>Ongkir</div>
												<div className='col' className='text-right'>
													Rp : {this.Price(this.state.ongkir)}
												</div>
											</div>
											<div className='row'>
												<div className='col-5 text-left ml-2'>Total</div>
												<div className='col text-right'>
													<h3>Rp : {this.Price(this.totalHarga())}</h3>
												</div>
											</div>
											<button
												type='button'
												className='btn btn-primary px-3 m-2'
											>
												Checkout
											</button>
										</div>
									</div>
								</div>
							)
						}
						return null
					})()}
				</div>
				<div className='modal' tabindex='-1' role='dialog' id='modal'>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title'>Produk</h5>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-label='Close'
								>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div className='modal-body'>
								{(() => {
									if (this.state.produk.length != 0) {
										return (
											<div>
												{this.state.produk.map((item, index) => (
													<div className='row py-3'>
														<div className='col-5'>
															<img
																src={
																	process.env.PUBLIC_URL +
																	"/image/" +
																	item.gambar
																}
																className='img-thumbnail'
																alt={item.nama}
															/>
														</div>
														<div className='col-7'>
															<h6 className='text-info'>{item.nama}</h6>
															<h6 className='text-danger'>
																Harga: Rp {item.harga}
															</h6>
															<button
																type='button'
																className='btn btn-success px-3 m-2'
																onClick={() => this.TambahKeKeranjang(item)}
															>
																Tambahkan Ke Keranjang
															</button>
														</div>
													</div>
												))}
											</div>
										)
									}
									return (
										<div className='col-12'>
											<h4 className='m-3'>
												Semua Produk Sudah Berada Di keranjang
											</h4>
											<div
												style={{
													backgroundImage: `url(${product})`,
													backgroundSize: "contain",
													backgroundRepeat: "no-repeat",
													height: "60vh",
													backgroundPosition: "center",
												}}
											></div>
										</div>
									)
								})()}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default keranjang
