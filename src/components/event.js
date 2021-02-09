import React, { Component } from "react"
import $ from "jquery"

export class event extends Component {
	constructor() {
		super()
		this.state = {
			event: [
				["Hari Peringatan Laut dan Samudera nasional", "15 Januari"],
				["Hari Lahan Basah Sedunia", "2 Februari"],
				["Hari Peduli Sampah Nasional", "21 Februari"],
				["Hari Hutan Sedunia", "21 Maret"],
				["Hari Air Sedunia", "22 Maret"],
				["Hari Meteorologi Sedunia", "23 Maret"],
				["Hari Bumi", "22 April"],
				["Hari Penanaman Pohon", "Jumat terakhir di bulan April"],
				["Hari Burung Migratori Internasional", "3 Mei"],
				["Hari Surya ", "3 Mei"],
				["Hari Biodiversitas Dunia", "22 Mei"],
				[
					"Hari Bersepeda Ke Kantor (Bike-to-Work Day)",
					"Jumat Ketiga di bulan Mei",
				],
				["Hari Anti Tembakau Internasional", "31 Mei"],
				["Hari Lingkungan Hidup Sedunia PBB", "5 Juni"],
				["Hari Melawan Desertifikasi dan Kekeringan Dunia PBB", "17 Juni"],
				["Hari Populasi Dunia PBB", "11 Juli"],
				["Hari Perlindungan Lapisan Ozon Sedunia", "16 September"],
				["Hari Emisi Nol (Zero Emissions Day)", "20 September"],
				["Hari Bebas Mobil (Car Free Day)", "22 September"],
				["eDay", "4 Oktober di 2008"],
				["Hari Habitat Dunia PBB", "Senin pertama di bulan Oktober"],
				["Hari Pengurangan Bencana Alam Internasional", "13 Oktober"],
				[
					"Hari Peringatan Sedunia untuk Mencegah Eksploitasi Lingkungan dalam Perang dan Konflik Bersenjata",
					"6 November",
				],
				["Hari Pohon", "21 November"],
				["Hari Gunung Sedunia", "11 Desember"],
				["Hari Aksi Ozon", "Pada waktu tertentu di musim panas"],
			],
			nama_event: "",
			waktu_event: "",
			action: "",
		}
	}
	Add = () => {
		// menampilkan komponen modal
		$("#modal_tambah_data").modal("show")
		this.setState({ nama_event: "", waktu_event: "", action: "insert" })
	}
	Edit = (item) => {
		$("#modal_tambah_data").modal("show")
		this.setState({
			nama_event: item[0],
			waktu_event: item[1],
			action: "update",
			selectedItem: item,
		})
		console.log(item)
	}
	Save = (Ev) => {
		Ev.preventDefault()
		let tempEvent = this.state.event
		if (this.state.action === "insert") {
			tempEvent.push([this.state.nama_event, this.state.waktu_event])
		} else if (this.state.action === "update") {
			let index = tempEvent.indexOf(this.state.selectedItem)
			tempEvent[index][0] = this.state.nama_event
			tempEvent[index][1] = this.state.waktu_event
		}
		this.setState({ event: tempEvent })
		$("#modal_tambah_data").modal("hide")
	}
	Drop = (item) => {
		// beri konfirmasi untuk menghapus data
		if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
			// menghapus data
			let tempEvent = this.state.event
			// posisi index data yg akan dihapus
			let index = tempEvent.indexOf(item)

			// hapus data
			tempEvent.splice(index, 1)

			this.setState({ event: tempEvent })
		}
	}
	render() {
		return (
			<div className='container'>
				<button className='btn btn-sm btn-success m-2' onClick={this.Add}>
					Tambah Data
				</button>
				<div className='row mx-auto'>
					{this.state.event.map((item) => (
						<div className='col-lg-4 col-md-6 col-sm-12 my-3'>
							<div
								className='alert alert-secondary pb-5'
								style={{ height: "100%" }}
								role='alert'
							>
								<h4 className='alert-heading'>{item[0]}</h4>
								<hr />
								<p className='mb-0'>{item[1]}</p>
								<div
									className='col-7 mx-auto my-3'
									style={{
										position: "absolute",
										bottom: "3px",
										right: "-10px",
									}}
								>
									{/* button untuk mengedit */}
									<button
										className='btn btn-sm btn-primary m-1'
										onClick={() => this.Edit(item)}
									>
										Edit
									</button>

									{/* button untuk menghapus */}
									<button
										className='btn btn-sm btn-danger m-1'
										onClick={() => this.Drop(item)}
									>
										Hapus
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='modal' id='modal_tambah_data'>
					<div className='modal-dialog'>
						<div className='modal-content'>
							{/* modal header */}
							<div className='modal-header'>Form Tambah Data Event</div>

							{/* modal body */}
							<div className='modal-body'>
								<form onSubmit={(ev) => this.Save(ev)}>
									Nama Event
									<input
										autoFocus
										type='text'
										className='form-control mb-2'
										value={this.state.nama_event}
										onChange={(ev) =>
											this.setState({ nama_event: ev.target.value })
										}
										required
									/>
									Waktu Event
									<input
										type='text'
										className='form-control mb-2'
										value={this.state.waktu_event}
										onChange={(ev) =>
											this.setState({ waktu_event: ev.target.value })
										}
										required
									/>
									<button className='btn btn-info btn-block' type='submit'>
										Simpan
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default event
