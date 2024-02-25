package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
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
@Table(name = "donation")
public class Donation {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private Long ItemId;
	@NotNull
	private Long Quantity;
	@NotNull
	private String ItemIdName;
	@NotNull
	private String Location;
	
	
}
