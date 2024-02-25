package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Camp {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long CampId;
	@NotNull
	@Column(length = 120)
	private String CampName;

//	
//	@OneToMany(mappedBy = "camps")
//	private List<Donor> donor;

}
