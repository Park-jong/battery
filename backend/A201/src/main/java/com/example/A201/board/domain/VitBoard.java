package com.example.A201.board.domain;

import com.example.A201.battery.domain.Battery;
import com.example.A201.battery.domain.Progress;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class VitBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vit_board_id")
    private Long id;

    @Column(name = "Voltage_measured")
    private Double voltage;

    @Column(name = "Current_measured")
    private Double current;

    @Column(name = "Temperature_measured")
    private Double temperature;

    private Double time;

    private Double soc;

    private Double ekf;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "progress_id")
    private Progress progress;

}
