package com.example.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Receiver {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long ReceiverId;
	@NotNull
	@Embedded
	private Name name;
	
	@NotNull
	private LocalDate Date;
	@NotNull
	private Long Amount;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "RegistrationId", referencedColumnName = "Id")
	private Registration registration;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "DonationId", referencedColumnName = "DonationId")
	private Donation1 Donation1;
}
